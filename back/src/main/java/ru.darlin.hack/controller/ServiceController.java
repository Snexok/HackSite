package ru.darlin.hack.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.darlin.hack.dto.ServiceDTO;
import ru.darlin.hack.mapper.ServiceMapper;
import ru.darlin.hack.service.ServiceService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/services")
@RequiredArgsConstructor
public class ServiceController {
    private final ServiceService serviceService;
    private final ServiceMapper serviceMapper;

    @GetMapping()
    public List<ServiceDTO> getServices() {
        return serviceMapper.map(serviceService.getAll());
    }

    @PostMapping("/create")
    @PreAuthorize("hasRole('ADMIN')")
    public ServiceDTO register(@RequestBody ServiceDTO service) {
        return serviceMapper.map(serviceService.create(serviceMapper.map(service)));
    }

    @PutMapping("/update")
    @PreAuthorize("hasRole('ADMIN')")
    public ServiceDTO update(@RequestBody ServiceDTO service) {
        return serviceMapper.map(serviceService.update(serviceMapper.map(service)));
    }
}
