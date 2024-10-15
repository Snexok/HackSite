package ru.darlin.hack.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.darlin.hack.dto.UserDTO;
import ru.darlin.hack.enums.UserRoles;
import ru.darlin.hack.mapper.UserMapper;
import ru.darlin.hack.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;

    @GetMapping()
    public List<UserDTO> getUsers() {
        return userMapper.map(userService.getAll());
    }

    @GetMapping("/roles")
    public UserRoles[] getRoles() {
        return UserRoles.values();
    }

    @PutMapping("/update")
    public UserDTO update(@RequestBody UserDTO user) {
        return userMapper.map(userService.create(userMapper.map(user)));
    }
}
