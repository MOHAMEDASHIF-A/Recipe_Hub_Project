package main;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;



public class Main extends parent{

	static Main obj = new Main();
	private  final static DatabaseManager databaseManager = obj.getDbManager();
    public static void main(String[] args) {

        int option = 1;
        Scanner sc = new Scanner(System.in);
        System.out.println("Welcome to Driver Hiring Application...>>");
        while (true) {
            System.out.println("Enter  1---> Add Drivers\nEnter 2--->Booking the Driver\nEnter 3--->Exit");
            option = sc.nextInt();
//            if (option == 1) {
//                System.out.println("---------Enter your Details--------");
//                System.out.println("Enter your Name");
//                sc.nextLine();
//                String name = sc.nextLine();
//                User u1 = new User(name);
//                u1.saveToDatabase();
//                System.out.println("Your details are successfully added.");
//                System.out.println("-------------------------------------");
//                System.out.println();
//            } 
            	if (option == 1) {
                System.out.println("--------About Drivers Details--------");
                System.out.println("Enter Driver Name");
                sc.nextLine();
                String name = sc.nextLine();
                System.out.println("Enter Driver Experience");
                int exp = sc.nextInt();
                System.out.println("Enter Driver Rating");
                double rat = sc.nextFloat();
                sc.nextLine();
                System.out.println("Enter Driver Vehicle");
                String vehicle = sc.nextLine();
                obj.addExampleDrivers(name, exp, rat, vehicle);
                List<Driver> availableDrivers = databaseManager.getAvailableDrivers();
                for (Driver driver : availableDrivers) {
                    System.out.println("Driver: " + driver.getName() + ", Experience: " + driver.getExperience()
                            + ", Rating: " + driver.getRating() + ", Vehicle: " + driver.getVehicle());
                }
                System.out.println("-------------------------------------");
                System.out.println();
            } else if (option == 2) {
                List<Driver> availableDrivers = databaseManager.getAvailableDrivers();
                System.out.println("Available Drivers:");
                for (int i = 0; i < availableDrivers.size(); i++) {
                    Driver driver = availableDrivers.get(i);
                    System.out.println((i + 1) + ". Driver: " + driver.getName() + ", Experience: "
                            + driver.getExperience() + ", Rating: " + driver.getRating() + ", Vehicle: "
                            + driver.getVehicle());
                }
                System.out.println("Enter the number of the driver you want to book:");
                int driverChoice = sc.nextInt();
                if (driverChoice >= 1 && driverChoice <= availableDrivers.size()) {
                    Driver selectedDriver = availableDrivers.get(driverChoice - 1);
                    System.out.println("Enter your name:");
                    sc.nextLine(); // Consume the newline character left by the previous nextInt()
                    String userName = sc.nextLine();
                    System.out.println("Enter your mobilenumber:");
                    String number = sc.nextLine();
                    System.out.println("Enter your email:");
                    String email = sc.nextLine();

                    User user = new User(userName,number,email);
                    user.saveToDatabase();
                    System.out.println("Enter the startinglocation:");
                    String startlocation = sc.nextLine();
                    System.out.println("Enter the destination:");
                    String destination = sc.nextLine();
                    System.out.println("Enter the startingdate:");
                    String startdate = sc.nextLine();
                    System.out.println("Enter the endingdate:");
                    String enddate = sc.nextLine();
                    System.out.println("Enter the days:");
                    String days = sc.nextLine();
                    Booking booking = new Booking(user, selectedDriver, startlocation,destination, startdate,enddate, days);
                    booking.saveToDatabase();
                    System.out.println("Booking successful!");
                    // bookDriver(user, selectedDriver, place, dates, days, vehicleType);
                } else {
                    System.out.println("Invalid driver choice.");
                }
                System.out.println("-------------------------------------");
                System.out.println();
            } 
            else if(option==3) {
            	System.out.println("Thank You for using our application");
            	break;
            }
            else {
                System.out.println("Invalid input");
                break;
            }
        }
    }

    
}
