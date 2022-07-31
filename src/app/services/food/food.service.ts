import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
    // if (tag == 'all') {
    //   return this.getAll();
    // } else {
    //   return this.getAll().filter(food => food.tags?.includes(tag));
    // }
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'Breakfast', count: 3 },
      { name: 'Lunch', count: 2 },
      { name: 'FastFood', count: 10 },
      { name: 'Pizza', count: 2 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 4 },
      { name: 'Fry', count: 3 },
      { name: 'Soup', count: 1 },
    ]
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'FarmHouse Pizza',
        cookTime: '10-20',
        price: 10,
        favourite: false,
        origins: ['Norway', 'The United States'],
        star: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza']
      },
      {
        id: 2,
        name: 'Meatball',
        cookTime: '20-40',
        price: 20,
        favourite: true,
        origins: ['Italy', 'Mexico'],
        star: 4.6,
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood', 'Fry']
      },
      {
        id: 3,
        name: 'Burger',
        cookTime: '10-30',
        price: 15,
        favourite: true,
        origins: ['Germany', 'Greece'],
        star: 4.3,
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger']
      },
      {
        id: 4,
        name: 'French fries',
        cookTime: '10-25',
        price: 10,
        favourite: false,
        origins: ['Belgium', 'Canada'],
        star: 4.4,
        imageUrl: '/assets/food-4.jpg',
        tags: ['Food', 'Fry']
      },
      {
        id: 5,
        name: 'Butter Masala',
        cookTime: '10-30',
        price: 18,
        favourite: false,
        origins: ['Norway', 'India'],
        star: 4.5,
        imageUrl: '/assets/food-5.jpg',
        tags: ['Lunch', 'Soup']
      },
      {
        id: 6,
        name: 'Deluxe Veggie Pizza',
        cookTime: '10-30',
        price: 15,
        favourite: true,
        origins: ['Australia', 'France'],
        star: 4.6,
        imageUrl: '/assets/food-6.jpg',
        tags: ['FastFood', 'Pizza']
      },
      {
        id: 7,
        name: 'Garlic bread',
        cookTime: '10-15',
        price: 5,
        favourite: false,
        origins: ['Turkey', 'Sweden'],
        star: 4.4,
        imageUrl: '/assets/food-7.jpg',
        tags: ['FastFood', 'Hamburger']
      },
      {
        id: 8,
        name: 'Veg Roll',
        cookTime: '10-20',
        price: 10,
        favourite: true,
        origins: ['Spain', 'India'],
        star: 4.5,
        imageUrl: '/assets/food-8.jpg',
        tags: ['FastFood', 'SlowFood']
      },
      {
        id: 9,
        name: 'Cheese Sandwich',
        cookTime: '10-15',
        price: 5,
        favourite: true,
        origins: ['Turkey', 'France'],
        star: 4.3,
        imageUrl: '/assets/food-9.jpg',
        tags: ['FastFood', 'Hamburger']
      },
      {
        id: 10,
        name: 'Veg Noodles',
        cookTime: '20-30',
        price: 15,
        favourite: true,
        origins: ['Japan', 'Russia'],
        star: 4.5,
        imageUrl: '/assets/food-10.jpg',
        tags: ['FastFood', 'Lunch']
      },
      {
        id: 11,
        name: 'Doughnut',
        cookTime: '20-25',
        price: 15,
        favourite: true,
        origins: ['Spain', 'Turkey'],
        star: 4.5,
        imageUrl: '/assets/food-11.jpg',
        tags: ['SlowFood', 'Hamburger']
      },
      {
        id: 12,
        name: 'Gobi Manchurian',
        cookTime: '15-20',
        price: 8,
        favourite: false,
        origins: ['Japan', 'China'],
        star: 4.0,
        imageUrl: '/assets/food-12.jpg',
        tags: ['FastFood', 'Fry']
      },
      {
        id: 13,
        name: 'Pasta',
        cookTime: '15-20',
        price: 10,
        favourite: false,
        origins: ['Italy', 'Brazil'],
        star: 4.0,
        imageUrl: '/assets/food-13.jpg',
        tags: ['FastFood', 'Lunch']
      },
      {
        id: 14,
        name: 'Plain Dosa',
        cookTime: '25-30',
        price: 10,
        favourite: true,
        origins: ['India', 'USA'],
        star: 4.6,
        imageUrl: '/assets/food-14.jpg',
        tags: ['Breakfast', 'Lunch']
      },
      {
        id: 15,
        name: 'Idli',
        cookTime: '15-20',
        price: 8,
        favourite: true,
        origins: ['India', 'Sri Lanka'],
        star: 4.2,
        imageUrl: '/assets/food-15.jpg',
        tags: ['Breakfast', 'Lunch']
      },
      {
        id: 16,
        name: 'Masala Dosa',
        cookTime: '20-30',
        price: 20,
        favourite: true,
        origins: ['India', 'Sri Lanka'],
        star: 4.5,
        imageUrl: '/assets/food-16.jpg',
        tags: ['Breakfast', 'Lunch']
      }
    ]
  }
}
