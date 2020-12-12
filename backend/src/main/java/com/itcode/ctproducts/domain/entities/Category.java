package com.itcode.ctproducts.domain.entities;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Table(name = "tb_category")
public class Category implements Serializable {
    private static final Long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long id;
    private String name;

    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    @Setter(AccessLevel.NONE)
    private Instant createdAt;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    @Setter(AccessLevel.NONE)
    private Instant updatedAt;

    @PrePersist
    public void prePersist(){
        createdAt = Instant.now();
    }

    @PreUpdate
    public void preUpdate(){
        updatedAt = Instant.now();
    }

}
