package org.solver.backendspringboot.controllers;

import org.solver.backendspringboot.objects.Elevator;
import org.solver.backendspringboot.objects.Floor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ElevatorController {
    Elevator elevator;
    List<Floor> floors;

    public ElevatorController() {
        elevator = new Elevator();
        floors = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            Floor floor = new Floor();
            floor.setFloorNumber(i);
            floors.add(floor);
        }
    }
}
