package com.imob.jImov.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.imob.jImov.dto.ImovelDTO;
import com.imob.jImov.services.ImovelService;

@RestController
@RequestMapping(value = "/imoveis")
public class ImovelController {
	@Autowired
	private ImovelService service;

	@GetMapping
	public ResponseEntity<List<ImovelDTO>> findAll() {
		List<ImovelDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{id}")	
	public ResponseEntity<ImovelDTO> findById(@PathVariable Long id) {
		ImovelDTO imovel = service.findById(id);
		return ResponseEntity.ok().body(imovel);
	}

	@PostMapping
	public ResponseEntity<ImovelDTO> insert(@RequestBody ImovelDTO dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<ImovelDTO> update(@PathVariable Long id, @RequestBody ImovelDTO dto) {
		dto = service.setImovel(id, dto);
		return ResponseEntity.ok().body(dto);
	}
}
