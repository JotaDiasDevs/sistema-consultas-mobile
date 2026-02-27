import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";

type Consulta = {
  id: number;
  paciente: string;
  medico: string;
  data: string;
  status: "agendada" | "confirmada" | "cancelada" | "realizada";
};

export default function App() {
  const [consultas, setConsultas] = useState<Consulta[]>([
    {
      id: 1,
      paciente: "Carlos Andrade",
      medico: "Dr. Roberto Silva",
      data: "28/02/2026",
      status: "agendada",
    },
    {
      id: 2,
      paciente: "Mariana Costa",
      medico: "Dra. Fernanda Lima",
      data: "01/03/2026",
      status: "confirmada",
    },
    {
      id: 3,
      paciente: "João Pereira",
      medico: "Dr. Marcos Souza",
      data: "15/02/2026",
      status: "agendada",
    },
        {
      id: 4,
      paciente: "Luiza Santos",
      medico: "Dr. Marcos Souza",
      data: "15/02/2026",
      status: "cancelada",
    },
        {
      id: 5,
      paciente: "Gustavo Dias",
      medico: "Dr. Fernanda Lima",
      data: "15/02/2026",
      status: "realizada",
    },
        {
      id: 6,
      paciente: "João Vieira",
      medico: "Dr. Roberto Silva",
      data: "15/02/2026",
      status: "agendada",
    },
  ]);

  function confirmarConsulta(id: number) {
    setConsultas(prev => prev.map(c => c.id === id ? { ...c, status: "confirmada" } : c));
  }

  function cancelarConsulta(id: number) {
    setConsultas(prev => prev.map(c => c.id === id ? { ...c, status: "cancelada" } : c));
  }

  function statusColor(status: Consulta["status"]) {
    switch (status) {
      case "agendada":
        return "#6c757d"; // cinza
      case "confirmada":
        return "#007bff"; // azul
      case "realizada":
        return "#28a745"; // verde
      case "cancelada":
        return "#dc3545"; // vermelho
      default:
        return "#000";
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sistema de Consultas</Text>
      <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: "center" }}>
        {consultas.map(consulta => (
          <View key={consulta.id} style={styles.card}>
            <Text>Paciente: {consulta.paciente}</Text>
            <Text>Médico: {consulta.medico}</Text>
            <Text>Data: {consulta.data}</Text>
            <Text style={{ color: statusColor(consulta.status), fontWeight: "bold" }}>Status: {consulta.status}</Text>

            {consulta.status === "agendada" && (
              <Button title="Confirmar Consulta" onPress={() => confirmarConsulta(consulta.id)} />
            )}

            {consulta.status !== "cancelada" && consulta.status !== "realizada" && (
              <View style={{ marginTop: 8 }}>
                <Button color="#ff4d4f" title="Cancelar Consulta" onPress={() => cancelarConsulta(consulta.id)} />
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#49b4f1",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  titulo: {
    color: "#fff",
    fontStyle: "italic",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "90%",
    padding: 20,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderColor: "#000000",
    marginBottom: 10,
  },
});