package ru.darlin.hack.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.darlin.hack.dto.JwtAuthenticationResponse;
import ru.darlin.hack.dto.UserDTO;
import ru.darlin.hack.entity.UserEntity;
import ru.darlin.hack.enums.UserRoles;
import ru.darlin.hack.service.UserService;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public JwtAuthenticationResponse login(UserDTO userDTO) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                userDTO.getLogin(),
                userDTO.getPassword()
            )
        );

        var user = userService
                .userDetailsService()
                .loadUserByUsername(userDTO.getLogin());

        var jwt = jwtUtil.generateToken(user);

        return new JwtAuthenticationResponse(jwt);
    }

    public UserEntity register(UserDTO userDTO) {
        var user = UserEntity.builder()
                .username(userDTO.getUsername())
                .login(userDTO.getLogin())
                .password(passwordEncoder.encode(userDTO.getPassword()))
                .role(UserRoles.ROLE_CLIENT)
                .createDateTime(LocalDateTime.now())
                .updateDateTime(LocalDateTime.now())
                .build();

        user = userService.create(user);

        return user;
    }
}
