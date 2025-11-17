package es.jesusdr.dwes;

import net.datafaker.Faker;

public class Main {
    private static final Faker faker = new Faker();
    public static void main(String[] args) {
        System.out.println("Hello and welcome!");

        for (int i = 1; i <= 5; i++) {
            System.out.println("i = " + i);
            System.out.println(faker.starWars().droids());
        }
    }
}