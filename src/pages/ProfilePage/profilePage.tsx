import { UserHeader } from "../../components/Header/userHeader/userHeader";
import { DialogProfilePage, SectionProfilePage } from "./style";
import Button from "@mui/material/Button";
import { BackgroundPages } from "../../components/Background/BackgroundPages/backgroundPages";
import picture from "../../assets/imgPerfil.svg";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useContext, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import Dialog from "@mui/material/Dialog";
import { Input } from "../../components/Form/Input/input";
import { SubmitHandler, useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { UserContext } from "../../provider/UserContext/UserContext";
import { IUpdateUserFormValues } from "../../provider/UserContext/@Types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const { user, uptadeUser, deleteUser } = useContext(UserContext);
  const navigate = useNavigate();
  let token = localStorage.getItem("@token");

  useEffect(() => {
    if (token == undefined) {
      navigate("/login");
      toast.error("você deve estar logado para acessar está página");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submit: SubmitHandler<IUpdateUserFormValues> = (formData) => {
    uptadeUser(formData, user.id);
  };

  return (
    <SectionProfilePage>
      <UserHeader />
      <BackgroundPages />
      <main>
        <img src={picture} alt="" />
        <section className="infos">
          {/* <div className='infosUp'> */}
          <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
          <nav className="navBtn">
            <IconButton className="icon" aria-label="add to shopping cart">
              <ModeEditOutlinedIcon onClick={handleClickOpen} />
            </IconButton>

            <IconButton className="icon" aria-label="add to shopping cart">
              <CloseIcon onClick={() => deleteUser(user.id)} />
            </IconButton>
          </nav>

          <Dialog open={open} onClose={handleClose}>
            <DialogProfilePage>
              <div>
                <h4>Atualizar perfil</h4>
                <IconButton className="icon" aria-label="add to shopping cart">
                  <CloseIcon onClick={handleClose} />
                </IconButton>
              </div>
              <form onSubmit={handleSubmit(submit)}>
                <Input
                  label="Nome"
                  type="name"
                  register={register("name")}
                  error={errors.name}
                />
                <Input
                  label="Email"
                  type="email"
                  register={register("email")}
                  error={errors.email}
                />
                <Input
                  label="Senha"
                  type="password"
                  register={register("password")}
                  error={errors.password}
                />
                <Button className="update" type="submit" variant="contained">
                  Atualizar
                </Button>
              </form>
            </DialogProfilePage>
          </Dialog>
          {/* </div> */}
          {/* <div>
            <nav>
              <ul>
                <IconButton aria-label="fingerprint" color="secondary">
                  <AddIcon />
                </IconButton>
              </ul>
            </nav>
          </div> */}
        </section>
      </main>
    </SectionProfilePage>
  );
};
