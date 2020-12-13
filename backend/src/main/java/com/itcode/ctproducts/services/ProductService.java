package com.itcode.ctproducts.services;

import com.itcode.ctproducts.domain.dto.CategoryDTO;
import com.itcode.ctproducts.domain.dto.ProductDTO;
import com.itcode.ctproducts.domain.entities.Category;
import com.itcode.ctproducts.domain.entities.Product;
import com.itcode.ctproducts.domain.repositories.CategoryRepository;
import com.itcode.ctproducts.domain.repositories.ProductRepository;
import com.itcode.ctproducts.services.exceptions.DatabaseException;
import com.itcode.ctproducts.services.exceptions.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    private final CategoryRepository categoryRepository;

    @Transactional(readOnly = true)
    public Page<ProductDTO> findAllPaged(PageRequest pageRequest){
        Page<Product> list =  productRepository.findAll(pageRequest);
        return list.map(ProductDTO::new);
    }

    @Transactional(readOnly = true)
    public ProductDTO fidById(Long id) {
        Optional<Product> obj = productRepository.findById(id);
        Product entity = obj.orElseThrow(() -> new ResourceNotFoundException("Produto não Encontrada!"));
        return new ProductDTO(entity, entity.getCategories());
    }

    @Transactional
    public ProductDTO insert(ProductDTO dto) {
        Product entity = new Product();
        copyDtoToEntity(dto, entity);
        entity = productRepository.save(entity);
        return new ProductDTO(entity);
    }


    @Transactional
    public ProductDTO update(Long id, ProductDTO dto) {
        try {
            Product entity = productRepository.getOne(id);
            copyDtoToEntity(dto, entity);
            entity = productRepository.save(entity);
            return new ProductDTO(entity);
        }catch (EntityNotFoundException e){
            throw new ResourceNotFoundException("Id Not Found " + id);
        }
    }

    public void delete(Long id) {
        try {
            productRepository.deleteById(id);
        }catch (EmptyResultDataAccessException e){
            throw new ResourceNotFoundException("Id Not Found " + id);
        }catch (DataIntegrityViolationException e){
            throw new DatabaseException("Integrid Vaiolation!");
        }
    }

    private void copyDtoToEntity(ProductDTO dto, Product entity) {
        entity.setName(dto.getName());
        entity.setDescription(dto.getDescription());
        entity.setPrice(dto.getPrice());
        entity.setDate(dto.getDate());
        entity.setImgUrl(dto.getImgUrl());
        //Limpando lista de categoria
        entity.getCategories().clear();
        for(CategoryDTO categoryDTO : dto.getCategories()){
            Category category = categoryRepository.getOne(categoryDTO.getId());
            entity.getCategories().add(category);
        }
    }
}
