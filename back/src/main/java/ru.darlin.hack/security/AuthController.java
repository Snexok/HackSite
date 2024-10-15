package ru.darlin.hack.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.darlin.hack.dto.JwtAuthenticationResponse;
import ru.darlin.hack.dto.UserDTO;
import ru.darlin.hack.entity.UserEntity;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    public JwtAuthenticationResponse login(@RequestBody UserDTO userDTO) {
        return authService.login(userDTO);
    }

    @PostMapping("/register")
    @PreAuthorize("hasRole('ADMIN')")
    public UserEntity register(@RequestBody UserDTO userDTO) {
        return authService.register(userDTO);
    }

}
