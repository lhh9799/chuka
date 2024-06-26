package com.luckyseven.funding.client;

import com.luckyseven.funding.dto.EventDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "eventclient", url = "${feignclient.event-baseUrl-v1}")
public interface EventFeignClient {
    //이벤트 정보 조회
    @GetMapping("{eventId}")
    EventDto getEvent(@PathVariable int eventId);
}
