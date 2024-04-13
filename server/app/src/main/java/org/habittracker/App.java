package org.habittracker;

import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.logging.Logger;

public class App {

    private final static Logger LOG = Logger.getLogger(App.class.getName());

    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/", new AppController.GetRequestHandler());
        server.start();
        LOG.info("Server started at port 8000");
    }

}
