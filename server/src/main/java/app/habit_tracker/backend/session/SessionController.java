package app.habit_tracker.backend.session;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class SessionController {

    @MessageMapping("/hello")
    @SendTo("/topic/messages")
    public String hello() {
        return "Server says: Hello World!";
    }

}
