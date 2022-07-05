package com.imob.jImov.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.imob.jImov.dto.ImovelDTO;
import com.imob.jImov.entities.Imovel;
import com.imob.jImov.repositories.ImovelRepository;

@Service
public class ImovelService {
    
	@Autowired
	private ImovelRepository repository;
	
	@Transactional(readOnly = true)
    public List<ImovelDTO> findAll() {
    	List<Imovel> list = repository.findAll();
    	return list.stream().map(x -> new ImovelDTO(x)).collect(Collectors.toList());
    }
	
	@Transactional
    public ImovelDTO insert(ImovelDTO dto) {
    	Imovel imovel = new Imovel(null, dto.getDescricao(), dto.getTipo(), dto.getEndereco(), dto.getImageuri());
    	imovel = repository.save(imovel);
    	return new ImovelDTO(imovel);
    	
    }
	
}
