create table estados(
  id_estado int primary key auto_increment,
  nome varchar(50) not null,
  sigla varchar(3) not null,
  created_at timestamp default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp
);

create table cidades(
  id_cidade int primary key auto_increment,
  nome varchar(50) not null,
  id_estado int not null,
  created_at timestamp default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp,
  foreign key (id_estado) references estados(id_estado) on delete restrict on update cascade
);

create table enderecos(
  id_endereco int primary key auto_increment,
  id_cidade int not null,
  logradouro varchar(50) not null,
  numero int not null,
  created_at timestamp default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp,
  foreign key (id_cidade) references cidades(id_cidade) on delete restrict on update cascade
);

create table cds(
  id_cd int primary key auto_increment,
  nome varchar(50) not null,
  cnpj varchar(14) not null,
  id_endereco int not null,
  created_at timestamp default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp,
  foreign key (id_endereco) references enderecos(id_endereco) on delete restrict on update cascade
);

create table motoristas(
  id_motorista int primary key auto_increment,
  nome varchar(50) not null,
  cpf varchar(11) not null,
  created_at timestamp default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp
);

create table tipo_veiculos(
  id_tipo_veiculo int primary key auto_increment,
  nome varchar(50),
  created_at timestamp default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp
);

create table veiculos(
  id_veiculo int primary key auto_increment,
  id_tipo_veiculo int not null,
  id_motorista int not null,
  placa varchar(10) not null,
  created_at timestamp default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp,
  foreign key (id_tipo_veiculo) references tipo_veiculos(id_tipo_veiculo) on delete restrict on update cascade,
  foreign key (id_motorista) references motoristas(id_motorista) on delete restrict on update cascade
);

create table cargas(
  id_carga int primary key auto_increment,
  peso decimal(10,2) not null,
  origem__id_cd int not null,
  destino__id_endereco int not null,
  created_at timestamp default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp,
  foreign key (origem__id_cd) references cds(id_cd) on delete restrict on update cascade,
  foreign key (destino__id_endereco) references enderecos(id_endereco) on delete restrict on update cascade
);
