package com.app.pojos;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name = "users")
public class User extends BaseEntity implements UserDetails {

	@Column(length = 50,nullable = false)
	private String name;
	
//	@Column(columnDefinition = "default='Customer'")
	
	@Enumerated(EnumType.STRING)
	private Role role;
	
	@Column(length = 12)
	private String mobileNo;
	
	@Column(length = 50,nullable = false)
	private String email;
	
	private String password;
	
	@OneToMany(mappedBy = "user",orphanRemoval = true,cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Payment> payment=new ArrayList<>();
	
	@OneToMany(mappedBy = "user",orphanRemoval = true,cascade = CascadeType.ALL)
	private List<Order> order=new ArrayList<>();
	
	
	public User() {
		// TODO Auto-generated constructor stub
		this.role=Role.valueOf("CUSTOMER") ;
	}
	
	
	
//	Helper methods
	
	public void addPayment(Payment payment) {
		this.payment.add(payment);
		payment.setUser(this);
	}
	
	public void removePayment(Payment payment) {
		this.payment.remove(payment);
		payment.setUser(null);
	}
	
	public void addOrder(Order order) {
		this.order.add(order);
		order.setUser(this);
	}
	
	public void removeOrder(Order order) {
		this.order.remove(order);
		order.setUser(null);
	}
	
//	Overrided methods
	
	@Override
	public String toString() {
		return "Users [name=" + name + ", mobileNo=" + mobileNo + ", Role=" + role + ", email=" + email + "]";
	}


	
//	Implementation for UserDetails

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return List.of(new SimpleGrantedAuthority(role.name()));
	}



	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return email;
	}



	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}



	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}



	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}



	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
}
