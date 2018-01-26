#pragma strict

function Start () {
var numTriangles = gameObject.GetComponent(MeshFilter).mesh.triangles.Length/3;
Debug.Log(numTriangles);
}
