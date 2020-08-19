package com.sasa.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "item_type")
public class ItemTypeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "item_type", length = 100, nullable = false, unique = true)
	private String itemType;

	public ItemTypeEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ItemTypeEntity(String itemType) {
		super();
		this.itemType = itemType;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getItemType() {
		return itemType;
	}

	public void setItemType(String itemType) {
		this.itemType = itemType;
	}

}
