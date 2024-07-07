package org.solver.backendspringboot.controllers;

import lombok.Getter;
import org.solver.backendspringboot.objects.Elevator;
import org.solver.backendspringboot.objects.Floor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ElevatorController {
    Elevator elevator;
    List<Floor> floors;

    public ElevatorController() {
        elevator = new Elevator();
        floors = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            Floor floor = new Floor();
            floor.setFloorNumber(i);
            if (i == 0) {
                floor.setOperatorFloor(true);
            }
            floors.add(floor);
        }
    }

    @GetMapping("/elevatorTick")
    public InfoWrapper elevatorTick() {
//        check if elevator is at summoned floor
        return new InfoWrapper(elevator, floors);
    }

    @GetMapping("/initialInfo")
    public InfoWrapper getInitialInfo() {
        return new InfoWrapper(elevator, floors);
    }

    @GetMapping("/elevatorInfo")
    public Elevator getElevatorInfo() {
        return elevator;
    }

    @GetMapping("/floorsInfo")
    public List<Floor> getFloorsInfo() {
        return floors;
    }

    @GetMapping("/changeOperatorFloor/{floorNumber}")
    public List<Floor> changeOperatorFloor(@PathVariable int floorNumber) {
        for (Floor floor : floors) {
            floor.setOperatorFloor(false);
        }
        floors.get(floorNumber).setOperatorFloor(true);
        return floors;
    }

    @GetMapping("/callElevator/{floorNumber}/{direction}")
    public List<Floor> callElevator(@PathVariable int floorNumber, @PathVariable int direction) {
        if (direction == 1) {
            floors.get(floorNumber).setContinueUp(true);
        } else if (direction == -1){
            floors.get(floorNumber).setContinueDown(true);
        }
        return floors;
    }

    @GetMapping("/enterElevator")
    public List<Floor> enterElevator() {
        for (Floor floor : floors) {
            floor.setOperatorFloor(false);
        }
        return floors;
    }

    @GetMapping("/exitElevator")
    public List<Floor> exitElevator() {
        for (Floor floor : floors) {
            if(floor.getFloorNumber() == elevator.getCurrentFloor()) {
                floor.setOperatorFloor(true);
            }
        }
        return floors;
    }

    @GetMapping("/openDoor")
    public Elevator openDoor() {
        elevator.setDoorOpen(true);
        return elevator;
    }

    @GetMapping("/closeDoor")
    public Elevator closeDoor() {
        elevator.setDoorOpen(false);
        return elevator;
    }

    @GetMapping("/chooseTarget/{floorNumber}")
    public List<Floor> choseTarget(@PathVariable int floorNumber) {
        floors.get(floorNumber).setTarget(true);
        return floors;
    }



}
