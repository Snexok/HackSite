package ru.darlin.hack.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@Entity
@Table(name = "services")
@NoArgsConstructor
@AllArgsConstructor
public class ServiceEntity {
    @Id
    @GeneratedValue
    private Long id;
    @Column(unique = true)
    private String title;
    private String description;
    private Number price;
    private LocalDateTime createDateTime;
    private LocalDateTime updateDateTime;
}
