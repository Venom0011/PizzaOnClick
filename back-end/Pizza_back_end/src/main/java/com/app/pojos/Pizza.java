package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Pizza extends BaseEntity {

	private String pizzaName;
	
	private double pizzaPrice;
	
	private String pizzaImagePath;
	
	@OneToMany(mappedBy = "pizza",orphanRemoval = true,cascade = CascadeType.ALL)
	private List<Topping> topping=new ArrayList<>();
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "order_id")
	private Order order;
	
	
	
//	Helper methods
	
	public void addTopping(Topping topping) {
		this.topping.add(topping);
		topping.setPizza(this);
	}
	
	public void removeTopping(Topping topping) {
		this.topping.remove(topping);
		topping.setPizza(null);
	}
}
