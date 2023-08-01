package main;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

class DatabaseManager {
    private static final String URL = "jdbc:mysql://localhost:3306/driverhire";
    private static final String USER = "root";
    private static final String PASSWORD = "Ashif@2003";
    private Connection connection;

    public DatabaseManager() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }
    public List<Driver> getAvailableDrivers() {
        List<Driver> drivers = new ArrayList<>();
        try (Statement statement = connection.createStatement()) {
            ResultSet resultSet = statement.executeQuery("SELECT * FROM drivers ORDER BY experience DESC, rating DESC");
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                int experience = resultSet.getInt("experience");
                double rating = resultSet.getDouble("rating");
                String vehicle = resultSet.getString("vehicle");
                Driver driver = new Driver(id, name, experience, rating, vehicle);

                // Retrieve and set the driver's location from the database
                Location location = getLocationForDriver(id);
                driver.setLocation(location);

                drivers.add(driver);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return drivers;
    }

    private Location getLocationForDriver(int driverId) {
        Location location = null;
        try (PreparedStatement statement = connection.prepareStatement("SELECT * FROM locations WHERE driver_id = ?")) {
            statement.setInt(1, driverId);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                double latitude = resultSet.getDouble("latitude");
                double longitude = resultSet.getDouble("longitude");
                location = new Location(latitude, longitude);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return location;
    }
    public void addDriver(Driver driver) {
        try (Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement statement = connection.prepareStatement("INSERT INTO drivers (name, experience, rating, vehicle) VALUES (?, ?, ?, ?)")) {
            statement.setString(1, driver.getName());
            statement.setInt(2, driver.getExperience());
            statement.setDouble(3, driver.getRating());
            statement.setString(4, driver.getVehicle());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
