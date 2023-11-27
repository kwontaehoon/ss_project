class Vehicle{
    String nayoung = "나영입니다.";
    String nayoung2 = "나영입니다.";
    String nayoung3 = "나영입니다.";
    String nayoung4 = "나영입니다.";
    String nayoung5 = "나영입니다.";
    String nayoung6 = "나영입니다.";

    void add(){
        int sum = 0;
        sum = 1 + 2;
        System.out.println(sum);
    }

}

class Car extends Vehicle {

    void add(){ // 다시만듬 오버라이딩
        int sum = 0;
        sum = 55;
        System.out.println(sum);
    }

    void Car(String a){
        System.out.print(a);
    }

    int func(int aa, int bb){
        System.out.println(aa);
        System.out.println("");
        return 123;
    }
}

class Bus {

}

class Bike {

}

class Taxi {

}

public class test2 {
    public static void main(String[] args){

        Vehicle vehicle = new Vehicle();

        Car car = new Car();
        Bus bus = new Bus();
        Bike bike = new Bike();
        Taxi taxi = new Taxi();

        System.out.println();
    }
    
}
