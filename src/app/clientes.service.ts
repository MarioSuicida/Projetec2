import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface usuarios{
  ID: string;
  primeiro_nome:string;
  segundo_nome:string;
  email:string;
  senha:string;
}
export interface transacao{
  ID: string;
  ID_usuario:string;
  valor:string;
  tipo:string;
  recorrente:string;
  categoria:string;
  mes:string;
  ano:string;
  dia:string;
} 

export interface planejamento_mensal{
  ID: string;
  ID_usuario:string;
  meta_de_despesas:string;
  gastos:string;
  recorrente:string;
  categoria:string;
  mes:string;
  ano:string;
} 
export interface categorias{
  ID: string;
  ID_usuario:string;
  Categorias:string;
}

@Injectable({
  providedIn: 'root'
})

export class usuariosService {
private url= "https://api-production-be82.up.railway.app";

  constructor( private http: HttpClient) { }

  getAll<T>(tabela: string, coluna: string, valor: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/${tabela}/${coluna}/${valor}`);
  }
  Remover<T>(tabela: string, coluna: string, valor: string): Observable<T[]> {
    return this.http.delete<T[]>(`${this.url}/${tabela}/${coluna}/${valor}`);
  }
  criar<T>(tabela: string, dados: any): Observable<T> {
    return this.http.post<T>(`${this.url}/${tabela}`, dados);
  }
  atualizar<T>(tabela: string, coluna: string, valor: string, dados: any): Observable<T> {
    return this.http.put<T>(`${this.url}/${tabela}/${coluna}/${valor}`, dados);
  }
}
