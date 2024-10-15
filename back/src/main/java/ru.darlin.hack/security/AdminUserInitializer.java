package ru.darlin.hack.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import ru.darlin.hack.entity.UserEntity;
import ru.darlin.hack.enums.UserRoles;
import ru.darlin.hack.repository.UserRepository;

@Component
@RequiredArgsConstructor
@Slf4j
public class AdminUserInitializer implements CommandLineRunner {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() == 0) {
            UserEntity admin = new UserEntity();
            admin.setLogin("admin");
            admin.setUsername("ADMIN");
            admin.setPassword(passwordEncoder.encode("1234"));
            admin.setRole(UserRoles.ROLE_ADMIN);

            userRepository.save(admin);
            log.info("Administrator created");
        }
    }
}
