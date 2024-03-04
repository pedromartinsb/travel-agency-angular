import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { Depoimento } from "../types/type";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DepoimentoService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listar(): Observable<Depoimento[]> {
    return this.http.get<Depoimento[]>(`${this.apiUrl}/depoimentos`);
  }
}
