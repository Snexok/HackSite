package ru.darlin.hack.mapper;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;
import ru.darlin.hack.dto.ServiceDTO;
import ru.darlin.hack.entity.ServiceEntity;

import java.util.List;

@Component
@Mapper(componentModel = "spring")
public interface ServiceMapper {
    ServiceDTO map(ServiceEntity serviceEntity);
    List<ServiceDTO> map(List<ServiceEntity> serviceEntity);

    @InheritInverseConfiguration
    ServiceEntity map(ServiceDTO dto);
}
