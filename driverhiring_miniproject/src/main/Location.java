package main;

import java.sql.*;

class Location {
    private int id;
    private double latitude;
    private double longitude;

    public Location(double latitude, double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public void saveToDatabase(int driverId) {
        try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/driverhire", "root", "Ashif@2003")) {
            if (this.id == 0) {
                PreparedStatement statement = connection.prepareStatement(
                        "INSERT INTO locations (driver_id, latitude, longitude) VALUES (?, ?, ?)",
                        Statement.RETURN_GENERATED_KEYS
                );
                statement.setInt(1, driverId);
                statement.setDouble(2, this.latitude);
                statement.setDouble(3, this.longitude);
                statement.executeUpdate();
                ResultSet generatedKeys = statement.getGeneratedKeys();
                if (generatedKeys.next()) {
                    this.id = generatedKeys.getInt(1);
                }
            } else {
                PreparedStatement statement = connection.prepareStatement(
                        "UPDATE locations SET latitude = ?, longitude = ? WHERE id = ?"
                );
                statement.setDouble(1, this.latitude);
                statement.setDouble(2, this.longitude);
                statement.setInt(3, this.id);
                statement.executeUpdate();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
