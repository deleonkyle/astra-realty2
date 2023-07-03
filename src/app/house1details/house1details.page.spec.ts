import { ComponentFixture, TestBed } from '@angular/core/testing';
import { House1detailsPage } from './house1details.page';

describe('House1detailsPage', () => {
  let component: House1detailsPage;
  let fixture: ComponentFixture<House1detailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(House1detailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
