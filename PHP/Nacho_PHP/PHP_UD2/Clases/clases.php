<?php


class Persona
{
    function __construct
    (
        protected string $DNI,
        protected string $name,
        protected string $lastname
    ){}
    public function getName()
    {
        return $this->name;
    }
    public function getLastname()
    {
        return $this->lastname;
    }
    public function setName($name)
    {
        $this->name = $name;
    }
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;
    }

    public function getDNI()
    {
        return $this->DNI;
    }

    public function setDNI($DNI)
    {
        $this->DNI = $DNI;
    }
    public function __toString()
    {
        return "Persona: " . $this->name . " " . $this->lastname;
    }
}
class Cliente extends Persona
{
    protected $saldo;
    function __construct($DNI, $name, $lastname, $saldo)
    {
        parent::__construct($DNI, $name, $lastname);
        $this->saldo = $saldo;
    }
    public function getSaldo()
    {
        return $this->saldo;
    }
    public function setSaldo($saldo)
    {
        $this->saldo = $saldo;
    }
    public function __toString()
    {
        return "Cliente: " . $this->getSaldo() . "<br> Nombre: " . $this->getName() . "<br>Apellido: " . $this->getLastname();
    }
}

$pepe = new Cliente(12345678, "Pepe", "Precoz", 1000);
echo $pepe;

