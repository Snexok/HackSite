package ru.darlin.hack.service;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.darlin.hack.entity.UserEntity;
import ru.darlin.hack.enums.UserRoles;
import ru.darlin.hack.repository.UserRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class UserServiceJPA implements UserService {
    private final UserRepository repository;

    @Override
    public UserEntity getByUsername(String username) {
        return repository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Пользователь не найден"));
    }

    @Override
    public UserEntity getByLogin(String login) {
        return repository.findByLogin(login);
    }

    @Override
    public UserEntity create(UserEntity userEntity) {
        userEntity.setRole(UserRoles.ROLE_CLIENT);
        return repository.save(userEntity);
    }

    @Override
    public List<UserEntity> getAll() {
        return repository.findAll();
    }

    @Override
    public UserDetailsService userDetailsService() {
        return this::getByLogin;
    }
}
