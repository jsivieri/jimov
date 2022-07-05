package com.imob.jImov.dto;

import java.io.Serializable;

import com.imob.jImov.entities.Imovel;
import com.imob.jImov.entities.TipoImovel;

public class ImovelDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	private String descricao;
	private TipoImovel tipo;
	private String endereco;
	private String imageuri;

	public ImovelDTO() {

	}

	public ImovelDTO(Long id, String descricao, TipoImovel tipo, String endereco, String imageuri) {
		super();
		this.id = id;
		this.descricao = descricao;
		this.tipo = tipo;
		this.endereco = endereco;
		this.imageuri = imageuri;
	}

	public ImovelDTO(Imovel entity) {
		super();
		this.id = entity.getId();
		this.descricao = entity.getDescricao();
		this.tipo = entity.getTipo();
		this.endereco = entity.getEndereco();
		this.imageuri = entity.getImageUri();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public TipoImovel getTipo() {
		return tipo;
	}

	public void setTipo(TipoImovel tipo) {
		this.tipo = tipo;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getImageuri() {
		return imageuri;
	}

	public void setImageuri(String imageuri) {
		this.imageuri = imageuri;
	}

	
}
