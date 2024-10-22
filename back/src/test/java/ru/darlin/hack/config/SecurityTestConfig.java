package ru.darlin.hack.config;

import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import ru.darlin.hack.security.JwtRequestFilter;
import ru.darlin.hack.security.JwtUtil;
import ru.darlin.hack.service.UserService;

@TestConfiguration
public class SecurityTestConfig {

    @MockBean
    private UserService userService;

    @MockBean
    private JwtRequestFilter jwtRequestFilter;

    @MockBean
    private JwtUtil jwtUtil;
}
