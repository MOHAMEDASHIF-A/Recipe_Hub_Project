package main;

import java.sql.*;

abstract class booked{
	public abstract void saveToDatabase();
}
class Booking extends booked{
    private int id;
    private User user;
    private Driver driver;
    private String startlocation;
    private String destination;
    private String startingdate;
    private String endingdate;
    private String days;


    

    public Booking(User user, Driver driver, String startlocation, String destination, String startingdate,
    		String endingdate, String days) {
    	super();
    	this.user = user;
    	this.driver = driver;
    	this.startlocation = startlocation;
    	this.destination = destination;
    	this.startingdate = startingdate;
    	this.endingdate = endingdate;
    	this.days = days;
    }

    public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}



	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	public Driver getDriver() {
		return driver;
	}



	public void setDriver(Driver driver) {
		this.driver = driver;
	}



	public String getStartlocation() {
		return startlocation;
	}



	public void setStartlocation(String startlocation) {
		this.startlocation = startlocation;
	}



	public String getDestination() {
		return destination;
	}



	public void setDestination(String destination) {
		this.destination = destination;
	}



	public String getStartingdate() {
		return startingdate;
	}



	public void setStartingdate(String startingdate) {
		this.startingdate = startingdate;
	}



	public String getEndingdate() {
		return endingdate;
	}



	public void setEndingdate(String endingdate) {
		this.endingdate = endingdate;
	}



	public String getDays() {
		return days;
	}



	public void setDays(String days) {
		this.days = days;
	}



	public void saveToDatabase() {
        try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/driverhire", "root", "Ashif@2003");
             PreparedStatement statement = connection.prepareStatement("INSERT INTO bookings (user_id, driver_id, startlocation, destination,startingdate,endingdate, days) VALUES (?, ?, ?, ?, ?, ?,?)", Statement.RETURN_GENERATED_KEYS)) {
            statement.setInt(1, this.user.getId());
            statement.setInt(2, this.driver.getId());
            statement.setString(3, this.startlocation);
            statement.setString(4, this.destination);
            statement.setString(5, this.startingdate);
            statement.setString(6, this.endingdate);
           
            statement.setString(7, this.days);
            
            statement.executeUpdate();
            ResultSet generatedKeys = statement.getGeneratedKeys();
            if (generatedKeys.next()) {
                this.id = generatedKeys.getInt(1);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
