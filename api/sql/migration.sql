--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `usuario_id` varchar(100) NOT NULL,
  `modulo` varchar(100) NOT NULL,
  `avaliacao` int(11) NOT NULL,
  `comentario` varchar(250) DEFAULT NULL,
  `data_criacao` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Table structure for table `dados_usuario`
--

CREATE TABLE `dados_usuario` (
  `id` int(11) NOT NULL,
  `id_usuario` varchar(50) NOT NULL,
  `mail` text,
  `dados` text,
  `data_criacao` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Indexes for table `dados_usuario`
--
ALTER TABLE `dados_usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for table `dados_usuario`
--
ALTER TABLE `dados_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

