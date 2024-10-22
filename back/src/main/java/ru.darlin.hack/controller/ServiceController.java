package ru.darlin.hack.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.darlin.hack.dto.ServiceDTO;
import ru.darlin.hack.entity.ServiceEntity;
import ru.darlin.hack.mapper.ServiceMapper;
import ru.darlin.hack.service.ServiceService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/services")
@RequiredArgsConstructor
@Slf4j
public class ServiceController {
    private final ServiceService serviceService;
    private final ServiceMapper serviceMapper;

    @GetMapping()
    public ResponseEntity<List<ServiceDTO>> getServices(@RequestParam(defaultValue = "0") int page,
                                                        @RequestParam(defaultValue = "10") int size) {
        System.out.println("Контроллер: начало работы метода getServices()");
        List<ServiceDTO> services = serviceMapper.map(serviceService.getAll(page, size));

        if (services.isEmpty()) {
            return ResponseEntity.noContent().build(); // status 204
        }

        return ResponseEntity.ok(services);
    }

    @PostMapping()
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ServiceDTO> register(@RequestBody ServiceDTO serviceDTO) {
        ServiceEntity service = serviceService.create(serviceMapper.map(serviceDTO));
        return ResponseEntity.ok(serviceMapper.map(service));
    }

    @PutMapping()
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ServiceDTO> update(@RequestBody ServiceDTO serviceDTO) {
        ServiceEntity service = serviceService.update(serviceMapper.map(serviceDTO));
        return ResponseEntity.ok(serviceMapper.map(service));
    }
}
