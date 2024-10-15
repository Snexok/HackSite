package ru.darlin.hack.dto;

import lombok.Data;
import ru.darlin.hack.enums.UserRoles;

@Data
public class UserDTO {
    private Long id;
    private String login;
    private String username;
    private String password;
    private UserRoles role;
}
