describe("a bus", function(){

  var bus, passenger, passenger2;

  beforeEach(function(){
    bus = new Bus();
    passenger = { name: "Levon Helm" };
    passenger2 = { name: "Bart Simpson" };

  });
  it("is empty", function(){
    expect(bus.isEmpty()).toBe(true);
  }); // it is empty

  it("accepts a passenger", function(){
    var passenger = { name: "Levon Helm" };
    bus.add(passenger);
    expect(bus.isEmpty()).not.toBe(true);
  }); // it accepts a passenger

  it("returns true if it contains a specific passenger", function(){
    bus.add(passenger);
    expect(bus.contains(passenger)).toBe(true);
    expect(bus.contains(passenger2)).toBe(false);
  }); // returns true if contains a specific passenger

  it("accepts multiple passengers", function(){
    bus.add(passenger);
    expect(bus.getSize()).toBe(1);
    bus.add(passenger2);
    expect(bus.getSize()).toBeGreaterThan(1);
  }); // accepts multiple passengers

  // it("won't accept same passenger twice", function(){
  //   bus.add(passenger);
  //   expect(bus.getSize()).toBe(1);
  //   bus.add(passenger);
  //   expect(bus.getSize()).toBeLessThan(2);
  // }); // won't accept same passenger twice

  it("throws an error if we add the same passenger twice", function(){
    bus.add(passenger);
    var test = function(){
      bus.add(passenger);
    };
    expect(test).toThrow();
  }); // throws an error if we add the same passenger twice

    it("returns a list of passengers names", function(){
    bus.add(passenger);
    bus.add(passenger2);
    expect(bus.getPassengers()).toEqual(["Levon Helm", "Bart Simpson"]);
  }); // returns a list of passengers names

}); // describe a bus
