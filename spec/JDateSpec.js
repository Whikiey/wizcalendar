describe("A JDate is just a function", function() {

    it("The 'dt' compute delta time (ΔT = TD - UT)", function() {

        expect(Lunisolar.JDate.dt(1702)).toBeCloseTo(dt_calc(1702));
//        expect(Lunisolar.JDate.dt(1702)).toBeCloseTo(10.0,0);
//        expect(Lunisolar.JDate.dt(1802)).toBeCloseTo(13.1,0);
//        expect(Lunisolar.JDate.dt(1988)).toBeCloseTo(55.8,0);
//        expect(Lunisolar.JDate.dt(1902)).toBeCloseTo(0,0);
//        expect(Lunisolar.JDate.dt(1960)).toBeCloseTo(33.2,0);
//        expect(Lunisolar.JDate.dt(2015)).toBeCloseTo(69.0,0);
    });
});