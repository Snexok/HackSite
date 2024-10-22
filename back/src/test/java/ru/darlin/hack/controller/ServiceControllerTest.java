package ru.darlin.hack.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import ru.darlin.hack.config.SecurityTestConfig;
import ru.darlin.hack.mapper.ServiceMapper;
import ru.darlin.hack.service.ServiceService;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ServiceController.class)
@Import({SecurityTestConfig.class})
public class ServiceControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ServiceMapper serviceMapper;

    @MockBean
    private ServiceService serviceService;


    @Test
    void testGetEndpointWithoutLogin() throws Exception {
        mockMvc.perform(get("/api/v1/services"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @WithMockUser(username = "client", roles = {"CLIENT"})
    void testGetEndpointWithLogin() throws Exception {
        mockMvc.perform(get("/api/v1/services"))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(roles = {"CLIENT"})
    void testGetEndpointWithParamsPageSize() throws Exception {
        mockMvc.perform(get("/api/v1/services")
                        .param("page", "0")
                        .param("size", "10"))
                .andExpect(status().isOk());
    }


    @Test
    @WithMockUser(roles = {"ADMIN"})
    void registerServiceShouldReturnOkForAdmin() throws Exception {
        mockMvc.perform(post("/api/v1/services")
                        .with(csrf()))
                .andExpect(status().isOk());
    }

}
