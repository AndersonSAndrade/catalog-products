package com.itcode.ctproducts.domain.dto;

import com.itcode.ctproducts.domain.entities.Category;
import lombok.Data;
import lombok.Getter;

import java.io.Serializable;

@Data
@Getter
public class CategoryDTO implements Serializable {
    private static final Long serialVersionUID = 1L;

    private Long id;
    private String name;

    public CategoryDTO(Category entity) {
        this.id = entity.getId();
        this.name = entity.getName();
    }

    public CategoryDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public CategoryDTO() {
    }
}
