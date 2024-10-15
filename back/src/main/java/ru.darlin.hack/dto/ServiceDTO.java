package ru.darlin.hack.dto;

import lombok.Data;
import ru.darlin.hack.enums.UserRoles;

@Data
public class ServiceDTO {
    private Long id;
    private String title;
    private String description;
    private Number price;
}
