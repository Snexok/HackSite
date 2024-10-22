package ru.darlin.hack.service;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import ru.darlin.hack.entity.ServiceEntity;
import ru.darlin.hack.repository.ServiceRepository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class ServiceServiceJPATest {

    @Mock
    private ServiceRepository serviceRepository;

    @InjectMocks
    private ServiceServiceJPA serviceService;

    private AutoCloseable closeable;

    @BeforeEach
    void setUp() {
        closeable = MockitoAnnotations.openMocks(this);
    }

    @AfterEach
    void tearDown() throws Exception {
        closeable.close();
    }

    @Test
    void testCreateService() {
        ServiceEntity serviceEntity = ServiceEntity.builder()
                .title("Test Service")
                .description("Test Description")
                .price(1000)
                .build();

        when(serviceRepository.save(any(ServiceEntity.class))).thenReturn(serviceEntity);

        ServiceEntity createdService = serviceService.create(serviceEntity);

        assertNotNull(createdService);
        assertEquals("Test Service", createdService.getTitle());
        assertEquals("Test Description", createdService.getDescription());
        assertEquals(1000, createdService.getPrice());
        verify(serviceRepository, times(1)).save(serviceEntity);
    }

    @Test
    void testUpdateService() {
        ServiceEntity updatedService = ServiceEntity.builder()
                .id(1L)
                .title("Updated Service")
                .description("Updated Description")
                .price(1500)
                .build();

        when(serviceRepository.save(any(ServiceEntity.class))).thenReturn(updatedService);

        ServiceEntity result = serviceService.update(updatedService);

        assertEquals("Updated Service", result.getTitle());
        assertEquals("Updated Description", result.getDescription());
        assertEquals(1500, result.getPrice());
        verify(serviceRepository, times(1)).save(updatedService);
    }


}
