package org.habittracker;

import com.google.gson.Gson;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class AppController {

    public static class GetRequestHandler implements HttpHandler {
        private final static Gson gson = new Gson();

        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!"GET".equals(exchange.getRequestMethod())) {
                exchange.sendResponseHeaders(405, -1); // 405 Method Not Allowed
            }

            List<Integer> list = new ArrayList<>(10);
            (new Random()).ints(10, 0, 20).forEach(list::add);
            String response = gson.toJson(list);
            exchange.sendResponseHeaders(200, response.length());
            OutputStream outputStream = exchange.getResponseBody();
            outputStream.write(response.getBytes());
            outputStream.flush();
            outputStream.close();

            exchange.close();
        }
    }
}
