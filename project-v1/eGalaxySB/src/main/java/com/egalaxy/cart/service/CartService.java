package com.egalaxy.cart.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.egalaxy.cart.entity.Cart;

public interface CartService {
	
	public List<Cart> getAllCarts();
	public Cart addCart(Cart cart);
	Optional<Cart> getCartById(int cartId);
	Map<String, Boolean> deleteCart(Cart cart);

}
