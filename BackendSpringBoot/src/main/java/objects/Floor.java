package objects;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Floor {
    private int floorNumber;
    private boolean continueUp;
    private boolean continueDown;
    private boolean isTarget;
}
