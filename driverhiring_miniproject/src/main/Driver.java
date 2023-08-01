package main;

class Driver {
    private int id;
    private String name;
    private int experience;
    private double rating;
    private String vehicle;
    private Location location;

    public Driver(int id, String name, int experience, double rating, String vehicle) {
        this.id = id;
        this.name = name;
        this.experience = experience;
        this.rating = rating;
        this.vehicle = vehicle;
    }

    public Driver(String name, int experience, double rating, String vehicle) {
        this.name = name;
        this.experience = experience;
        this.rating = rating;
        this.vehicle = vehicle;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getVehicle() {
        return vehicle;
    }

    public void setVehicle(String vehicle) {
        this.vehicle = vehicle;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }
}
