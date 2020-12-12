package com.itcode.ctproducts.services;

import com.itcode.ctproducts.domain.dto.CategoryDTO;
import com.itcode.ctproducts.domain.entities.Category;
import com.itcode.ctproducts.domain.repositories.CategoryRepository;
import com.itcode.ctproducts.services.exceptions.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    @Transactional(readOnly = true)
    public List<CategoryDTO> findAll(){
        List<Category> list =  categoryRepository.findAll();
        return list.stream().map(x -> new CategoryDTO(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public CategoryDTO fidById(Long id) {
        Optional<Category> obj = categoryRepository.findById(id);
        Category entity = obj.orElseThrow(() -> new EntityNotFoundException("Categoria não Encontrada!"));
        return new CategoryDTO(entity);
    }
}
