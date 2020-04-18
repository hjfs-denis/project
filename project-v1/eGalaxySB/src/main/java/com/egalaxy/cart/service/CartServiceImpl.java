package com.egalaxy.cart.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egalaxy.cart.entity.Cart;
import com.egalaxy.cart.repository.CartRepository;

@Service
public class CartServiceImpl implements CartService {
	
	@Autowired
	private CartRepository cartRepository;

	@Override
	@Transactional
	public List<Cart> getAllCarts() {
		return cartRepository.findAll();
	}

	@Override
	@Transactional
	public Cart addCart(Cart cart) {
		return cartRepository.save(cart);
	}

	@Override
	@Transactional
	public Optional<Cart> getCartById(int cartId) {
		return cartRepository.findById(cartId);
	}

	@Override
	@Transactional
	public Map<String, Boolean> deleteCart(Cart cart) {
		 cartRepository.delete(cart);
		 return null;
	}



}
