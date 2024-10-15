package ru.darlin.hack.mapper;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import ru.darlin.hack.dto.UserDTO;
import ru.darlin.hack.entity.UserEntity;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDTO map(UserEntity userEntity);
    List<UserDTO> map(List<UserEntity> userEntity);

    @InheritInverseConfiguration
    UserEntity map(UserDTO dto);
}
