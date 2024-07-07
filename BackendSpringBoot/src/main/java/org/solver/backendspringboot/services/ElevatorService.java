package org.solver.backendspringboot.services;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.solver.backendspringboot.objects.Elevator;
import org.solver.backendspringboot.objects.Floor;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class ElevatorService {

    public static boolean checkFloorRequests(List<Floor> floors) {
        boolean anyFloorRequest = false;
        for (Floor floor : floors) {
            if (floor.isContinueUp() || floor.isContinueDown() || floor.isTarget()) {
                anyFloorRequest = true;
                break;
            }
        }
        return anyFloorRequest;
    }

    public int idleElevatorCheck(List<Floor> floors, Elevator elevator) {
        for (Floor floor : floors) {
            if (floor.isContinueUp() || floor.isContinueDown() || floor.isTarget()) {
                if (floor.getFloorNumber() > elevator.getCurrentFloor()) {
                    return 1;
                } else if (floor.getFloorNumber() < elevator.getCurrentFloor()) {
                    return -1;
                }
            }
        }
        return elevator.getMovement();
    }

    public int getFurthestFloorInDirection(List<Floor> floors, Elevator elevator) {
        if (elevator.getMovement() == 1) {
            int furthestFloor = 0;
            for (Floor floor : floors) {
                if (floor.getFloorNumber() > furthestFloor && (floor.isContinueUp() || floor.isContinueDown() || floor.isTarget())) {
                    furthestFloor = floor.getFloorNumber();
                }
            }
            return furthestFloor;
        }

        else if (elevator.getMovement() == -1) {
            int furthestFloor = floors.size();
            for (Floor floor : floors) {
                if (floor.getFloorNumber() < furthestFloor && (floor.isContinueUp() || floor.isContinueDown() || floor.isTarget())) {
                    furthestFloor = floor.getFloorNumber();
                }
            }
            System.out.println(furthestFloor);
            return furthestFloor;
        }
        return elevator.getCurrentFloor();
    }
}
